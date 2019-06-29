; DON'T OPEN THIS FILE WITH NOTEPAD.  If you don't have a preferred text editor, use notepad++ or any other modern text editor.
;
; If you edit this file, Save-As permissions.ini
;
;
; Basics:
; - Semicolons are comment characters, any line that starts with one is ignored.
; - Sections headers are permissions groups, they're the lines that have a word in [Brackets].  You can add more for more permissions groups.
; - Options with a semicolon before them will be ignored.
; - Add whatever permissions you want, but always have at least one.
; - Never have an options without a value, i.e. "CommandBlacklist = "
; - [Default] is a special section.  Any user that doesn't get assigned to a group via role or UserList gets assigned to this group.
; - [Owner (auto)] is a section that owner of the bot gets assigned to.
;
;
; Option info:
;
;    [Groupname]
;    This is the section header.  The word is the name of the group, just name it something appropriate for its permissions.
;
;    CommandWhitelist = command1 command2
;    List of commands users are allowed to use, separated by spaces.  Don't include the prefix, i.e. !  Overrides CommandBlacklist if set.
;
;    CommandBlacklist = command1 command2
;    List if commands users are not allowed to use.  You don't need to use both
;    whitelist and blacklist since blacklist gets overridden.  Just pick one.
;
;    IgnoreNonVoice = command1 command2
;    List of commands that the user is required to be in the same voice channel as the bot to use.
;    For example, if you don't want the user to be able to voteskip songs while not in the voice channel, add skip to this option.
;
;    GrantToRoles = 111222333444555 999888777000111
;    List of ids to automatically grant this group to.  To get the id of a role, use the listids command.
;
;    UserList = 21343341324 321432413214321
;    List of user ids to grant this group to.  This option overrides the role granted by the GrantToRoles option.
;
;    MaxSongLength = 600
;    Maximum length of a song in seconds.  Note: This won't always work if the song data doesn't have duration listed.
;    This doesn't happen often, but youtube, soundcloud, etc work fine though.  This will be fixed in a future update.
;    A value of 0 means unlimited.
;
;    MaxSongs = 5
;    Maximum number of songs a user is allowed to queue. A value of 0 means unlimited.
;
;    MaxPlaylistLength = 10
;    Maximum number of songs a playlist is allowed to have to be queued. A value of 0 means unlimited.
;
;    MaxSearchItems = 10
;    The maximum number of items that can be returned in a search.
;
;    AllowPlaylists = yes
;    Whether or not the user is allowed to queue entire playlists.
;
;    InstaSkip = no
;    Allows the user to skip a song without having to vote, like the owner.
;
;    Remove = no
;    Allows the user to remove any song from the queue at any point.
;
;    SkipWhenAbsent = yes
;    Tells the bot to automatically skip songs queued by people in this group who have left the voice channel after queueing.
;    Will only skip once the song is about to play.
;
;    BypassKaraokeMode = no
;    Allows the user to queue songs even when karaoke mode is activated.
;
;    Extractors = example1 example2
;    Specify the name of youtube-dl extractors that people will be able to play using the bot. Seperated by spaces.
;    This is to allow restriction of playing porn videos through the bot, as these are supported by yt-dl. Leave blank to allow all.
;    For a list of possible extractors, see https://github.com/rg3/youtube-dl/tree/master/youtube_dl/extractor
;    The generic extractor is used by the bot to query the song when the query text is given via the play command.
;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;


; I've set some example groups, these should be fine.  Just add your roles or users and you should be good to go.

;;;;;;;;;;;;;;;;;;;
;
;  AND HEY.
;  Before you ask any dumb "how do I do this" questions in the help server, you should probably read that big comment I put time
;  into writing for this exact purpose.  It tells you how to use every option.  Your question is probably answered there.
;
;;;;;;;;;;;;;;;;;;;



; This group is for owner.  Any options not specified will fallback to permissive default value.  Don't remove/rename this group.
; You cannot assign users or roles to this group.  Those options are ignored.
[Owner (auto)]
; MaxSongLength = 0
; MaxSongs = 0
; MaxPlaylistLength = 0
; AllowPlaylists = yes
; InstaSkip = yes
; Remove = yes
; SkipWhenAbsent = no
; BypassKaraokeMode = yes
; ToggleAutoPlaylists = yes
; Extractors = 

; This is the fallback group for any users that don't get assigned to another group.  Don't remove/rename this group.
; You cannot assign users or roles to this group.  Those options are ignored.
[Default]
CommandWhitelist = play perms queue np skip search id help clean
; CommandBlacklist =
IgnoreNonVoice = play skip search
MaxSongLength = 1200
MaxSongs = 0
MaxSearchItems = 10
AllowPlaylists = yes
; MaxPlaylistLength = 20
InstaSkip = no
Remove = no
SkipWhenAbsent = no
BypassKaraokeMode = no
Extractors = generic youtube youtube:playlist soundcloud

; This group has full permissions.
[MusicMaster]
; GrantToRoles =
; UserList =
MaxSongLength = 0
MaxSongs = 0
MaxPlaylistLength = 0
MaxSearchItems = 20
AllowPlaylists = yes
InstaSkip = yes
Remove = yes
SkipWhenAbsent = no
BypassKaraokeMode = yes
Extractors = 

; This group can't use the blacklist and listids commands, but otherwise has full permissions.
[DJ]
CommandBlacklist = blacklist listids
; GrantToRoles =
; UserList =
MaxSongLength = 0
MaxSongs = 0
MaxPlaylistLength = 0
MaxSearchItems = 20
AllowPlaylists = yes
InstaSkip = yes
Remove = yes
SkipWhenAbsent = no
BypassKaraokeMode = yes
Extractors = generic youtube youtube:playlist soundcloud

; This group can only use the listed commands, can only use play/skip when in the bot's voice channel,
; can't request songs longer than 3 and a half minutes, and can only request a maximum of 8 songs at a time.
[Limited]
CommandWhitelist = play queue np perms help skip
; CommandBlacklist =
IgnoreNonVoice = play skip
; GrantToRoles =
MaxSongLength = 210
MaxSongs = 8
MaxSearchItems = 10
AllowPlaylists = yes
InstaSkip = no
Remove = no
SkipWhenAbsent = yes
BypassKaraokeMode = no
Extractors = generic youtube youtube:playlist
