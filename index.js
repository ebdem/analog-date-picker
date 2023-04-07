$('.time').clockTimePicker({
  // displays the afternoon hours in the outer circle instead of the inner circle
  afternoonHoursInOuterCircle: false,

  // If you set this option to true, <a href="https://www.jqueryscript.net/tags.php?/popup/">popup</a> is always opened to select hours first before selecting the minutes.
  alwaysSelectHoursFirst: false,

  // auto resize
  autosize: false,

  // custom colors
  colors: {
    buttonTextColor: '#0797FF',
    clockFaceColor: '#EEEEEE',
    clockInnerCircleTextColor: '#888888',
    clockInnerCircleUnselectableTextColor: '#CCCCCC',
    clockOuterCircleTextColor: '#000000',
    clockOuterCircleUnselectableTextColor: '#CCCCCC',
    hoverCircleColor: '#DDDDDD',
    popupBackgroundColor: '#FFFFFF',
    popupHeaderBackgroundColor: '#0797FF',
    popupHeaderTextColor: '#FFFFFF',
    selectorColor: '#0797FF',
    selectorNumberColor: '#FFFFFF',
    signButtonColor: '#FFFFFF',
    signButtonBackgroundColor: '#0797FF',
  },

  // Determine whether to show browser's context menu on right click
  contextmenu: false,

  // If true, the hours can be greater than 23.
  duration: false,

  // If true, the duration can be negative.
  // This settings only has effect if the setting duration is set to true.
  durationNegative: false,

  // font options
  fonts: {
    fontFamily: 'Arial',
    clockOuterCircleFontSize: 14,
    clockInnerCircleFontSize: 12,
    buttonFontSize: 20,
  },

  // hides the unselectable number
  hideUnselectableNumbers: false,

  // i18n
  i18n: {
    okButton: 'OK',
    cancelButton: 'Cancel',
  },

  // min/max times
  maximum: '23:59',
  minimum: '-23:59',

  // animation speed when switching modes
  modeSwitchSpeed: 500,

  // only shows clock on mobile device
  onlyShowClockOnMobile: false,

  // callbacks
  onAdjust: function (newVal, oldVal) {
    /*console.log('Value adjusted from ' + oldVal + ' to ' + newVal + '.');*/
  },
  onChange: function (newVal, oldVal) {
    /*console.log('Value changed from ' + oldVal + ' to ' + newVal + '.');*/
  },
  onClose: function () {},
  onModeSwitch: function () {},
  onOpen: function () {},

  // width of the popup in the Desktop
  popupWidthOnDesktop: 200,

  // precision
  precision: 1,

  // if this option is set to true, a user cannot empty the field by hitting delete or backspace.
  required: false,

  // custom separator
  separator: ':',

  // if true, positive durations use the plus sign (+) as a prefix.
  useDurationPlusSign: false,

  // if true, the mobile phone vibrates while changing the time.
  vibrate: true,
});

$('.time').change(function () {
  console.log($('.time').clockTimePicker('value'));
});
