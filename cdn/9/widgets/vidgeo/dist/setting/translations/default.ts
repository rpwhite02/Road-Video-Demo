const translations = {
    _widgetLabel: 'Vidgeo',
  
    // Section Labels
    documentationSectionLabel: 'Documentation',
    mapWidgetSectionLabel: 'Map Widget',
    playerOptions: 'Player Options',
    videoSourceHeader: 'Video Source',
    videoSources: 'Video Sources',
    videoSourceSettings: 'Video Source Options',
    newVideoSourceSettings: 'Add Video Source',
    removeVideoSource: 'Remove video source',
    missingDataSource: 'Missing data source',
    urlNotConfigured: 'URL not configured',
    sourceGroupLabel: 'Source',
    advancedGroupLabel: 'Advanced',
    playbackGroupLabel: 'Playback',
    cameraGroupLabel: 'Camera / View Direction',
    symbologyGroupLabel: 'Symbology',
    videoDirectionSettings: 'Direction Options',
  
    // Data Source Labels and Help Text
    videosDataSourceLabel: 'Videos Feature Layer',
    videosDataSourceSelectLabel: 'Select Videos Layer',
    videosDataSourceSelectHelpText: "Videos polyline feature layer. This feature layer should contain the information required to resolve the video source (url). The layer must be m-enabled with strictly increasing values representing the video time in seconds.",
  
    // Video Field Labels
    videoIdFieldSelectLabel: 'Video Id Field',
    videoSourceExpressionLabel: 'Video URL',
    videoProjectionExpressionLabel: 'Video Projection',
    videoTypeExpressionLabel: 'Video MIME Type',
    videoPosterExpressionLabel: 'Video Preview Poster',
    videoBaseRotationExpressionLabel: 'Relative Camera Rotation',
    videoInitialRotationExpressionLabel: 'Initial Video Rotation',
    fixedOrientationExpressionLabel: 'Use Fixed Orientation',
    fixedOrientationDirectionExpressionLabel: 'Fixed Orientation Direction',
    enableViewDirectionLabel: 'Enable View Direction',
    displayViewDirectionIndicatorLabel: 'View Direction Indicator',
    playbackLocationSymbolLabel: 'Playback Location Symbol',
    playbackLocationSymbolHelpText: 'The symbol used to display the current location of the video during playback.',
    rotatePlaybackLocationSymbolLabel: 'Auto-rotate to trajectory',
    rotatePlaybackLocationSymbolHelpText: 'Rotates the symbol to face the direction of travel along the video path. Turn off to keep the symbol\'s orientation fixed (e.g. always pointing the same way) regardless of trajectory.',
    viewDirectionIndicatorLabel: 'View Direction Indicator',
    viewDirectionIndicatorHelpText: 'Toggle the on-map indicator that shows where a 360° camera is currently aimed. Use the symbol picker to customize its appearance.',
    viewDirectionSymbolLabel: 'View Direction Symbol',
    viewDirectionSymbolColorLabel: 'Color',
    viewDirectionSymbolSizeLabel: 'Size',
    viewDirectionSymbolHelpText: 'The symbol used to display the current view direction of the video during playback.',
  
    // Player Options Labels and Help Text
    includeAuthToken: 'Append ArcGIS Token',
    includeAuthTokenHelpText: 'Append an ArcGIS authentication token to the video request for cases where the configured video source requires ArcGIS authentication. This should only be enabled when ArcGIS authentication is used to secure the videos.',
    autoplay: 'Autoplay',
    autoplayNext: 'Autoplay Next Video',
    autoplayNextHelpText: 'When the current video ends, the player automatically advances to the next video. Sets the default for this source; users can override at runtime via the toolbar.',
    autoPan: 'Auto Pan',
    autoPanHelpText: 'Keeps the map centered on the playback location as the video plays. Sets the default for this source; users can override at runtime via the toolbar.',
    autoplayHelpText: 'Specifies whether videos should autoplay on video selection/change/load.',
    muteOnStartup: 'Mute on Startup',
    muteOnStartupHelpText: 'Specifies whether the player should be muted by default.',
    enableViewDirectionHelpText: 'Turn off when the video\'s view direction cannot be reliably mapped to a real-world bearing — e.g. drone footage with free yaw/pitch. Hides the view direction indicator, View Target, and Look at Selection.',
    displayViewDirectionIndicatorHelpText: 'Specifies whether to display the view direction indicator for 360° videos.',
    fullScreenControl: 'Full Screen Control',
    pictureInPictureControl: 'Picture in Picture Control',
    enableFeatureClick: 'Select on Click',
    enableFeatureClickHelpText: 'Specifies whether to enable video feature selection upon clicking the feature in the map, independent of whether selection tools are available and enabled.',
    displayToolbar: 'Display Toolbar',
    displayToolbarHelpText: 'Displays the Vidgeo Controls toolbar as an embedded toolbar within the Vidgeo widget. For additional flexibility, an external modular toolbar can be used via the Vidgeo Controls widget. If the Vidgeo Controls widget is used, the internal toolbar should not be displayed.',
    showWidgetMapLayers: 'Show Widget Map Layers',
    showWidgetMapLayersHelpText: 'When enabled, the widget\'s map layers (playback location indicator, view direction indicator, etc.) appear in the map\'s Layer List and Legend widgets. Disabled by default to keep those widgets uncluttered.',
  
    // Expression Help Text
    videoUrlHelpText: 'Value or expression to resolve the url of the video. The configured URL must be accessible to the user/application. If the video URL requires authentication, a signed URL, authentication token, proxy, or other mechanism for authentication may be required.',
    videoProjectionHelpText: 'Value or expression that resolves the projection of the video. 360, 360°, Panoramic, equirectangular, cubemap, Sphere, Cube, 360_CUBE, 180, 180_MONO, 360_LR, 360_TB, EAC and EAC_LR are treated as 360°, as are Yes, True, 1, On, Enabled and Active. Standard, 2D, NONE, blank and anything unrecognised are treated as standard 2D video. Case and surrounding spaces are ignored. When a video source contains a mix of standard and 360° videos, use a field to specify the projection per video.',
    videoTypeExpressionHelpText: 'Value or expression to resolve the video\'s MIME type. If left blank, the MIME type will be inferred from the video extension. This value can usually be left blank unless video extensions (.mov, .mp4, etc.) are not visible in the url.',
    videoPosterExpressionHelpText: 'Value or expression to resolve a "poster" image to be displayed before the video is played. This is commonly used either to display a video preview image or organization logo.',
    videoBaseRotationExpressionHelpText: 'Value or expression defining the rotation of the camera for 360 videos, relative to the camera\'s trajectory. For example, if a 360 camera was mounted facing 90° to the left of the direction of travel, a value of -90 or 270 would ensure that the directional information correctly corresponds to the camera direction.',
    videoInitialRotationExpressionHelpText: 'Value or expression defining the initial rotation of the video for 360 videos, relative to the camera\'s "forward" direction. For example, if a 360 camera was mounted facing 90° to the left of the direction of travel, a value of -90 or 270 would ensure that the video faces the direction of travel when initially loaded/played. This setting is typically used when a non-zero value is used for Relative Camera Rotation, permitting the video to face the direction of travel on playback. When Relative Camera Rotation is specified, this value should typically be opposite/negative angle relative to Relative Camera Rotation.',
    fixedOrientationExpressionHelpText: 'Value or expression specifying whether "fixed orientation" is used in a 360 video. When fixed orientation is enabled, the video will face the same compass direction throughout its duration, rather than changing as the camera rotation changes. The expression result should be "truthy" or "falsy". False/Falsy values include NULL, "", "False", "F", "No", "N", and 0. All other values will be considered True/Truthy.',
    fixedOrientationDirectionExpressionHelpText: 'When Fixed Orientation is enabled, this value or expression defines the azimuth / direction of the video. It should represent the direction the camera was facing throughout the recording. If this value is not provided or evaluates to null, the video’s initial direction / trajectory will be used to determine the fixed orientation. Note that if “Relative Camera Rotation” is specified, it will still be applied even when Fixed Orientation is enabled.',

    // Expression Warning Text
    noEffectWithYouTubeWarningText: 'This setting has no effect when used with YouTube or Vimeo videos.'
}

export default translations;

export type TranslationKey = keyof typeof translations;
  