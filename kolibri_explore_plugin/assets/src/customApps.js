import urls from 'kolibri.urls';

// List of channel ids and the app name with the corresponding
// custom-channel-presentation zip bundle
export const CustomChannelApps = {
  '38eaaf9ec82a44f9ab6e7a44cb730f07': 'pbs-kids',
  '3e464ee12f6a50a781cddf59147b48b1': 'sikana-english',
  f5f6729f95b55753badeaa066fa6e986: 'healthy-body',
  '4e413158eac55422a5343af9fcfa8d59': 'healthy-mind',
  '3160899a73564d8a8467284d9219b91c': 'terminal-two',
  '057f871caa405ec29d62ba0523c193d7': 'music',
  efcc464be5a85ba5a58d1636b00313fc: 'gardening',
  f62db29be20453c4a267132e93a9e602: 'wikipedia',
  '85b42a40745f4e2392ed62e72d4dad6e': 'oceanx',
  e409b964366a59219c148f2aaa741f43: 'blockly-games',
  '197934f144305350b5820c7c4dd8e194': 'phet-interactive-simulations',
  bbb4ea407a3c450cb18cbaa76f2d75cd: 'cspathshala-english',
  fc47aee82e0153e2a30197d3fdee1128: 'open-stax',
  '74f36493bb475b62935fa8705ed59fed': 'thoughtful-learning',
  '1e378725d3924b47aa5e1260628820b5': 'ted-ed-lessons',
  '922e9c576c2f59e59389142b136308ff': 'career-girls',
  e11462f71c6f5472b113311c69071b05: 'dance',
};

export function getAppNameByID(id) {
  return CustomChannelApps[id] || 'default';
}

// The order here is important because is how they appear in the channel page.
export const RecommendedChannelIDs = [
  '1e378725d3924b47aa5e1260628820b5', // ted-ed-lessons
  'e11462f71c6f5472b113311c69071b05', // dance
  '3160899a73564d8a8467284d9219b91c', // terminal-two
  '057f871caa405ec29d62ba0523c193d7', // music
  'f62db29be20453c4a267132e93a9e602', // wikipedia
  '922e9c576c2f59e59389142b136308ff', // career-girls
  'efcc464be5a85ba5a58d1636b00313fc', // gardening
  'f5f6729f95b55753badeaa066fa6e986', // healthy-body
  'e5b26962b0ee5d8487152d0987d32e44', // 49ers-edu-digital-playbook
  // 'xxx', // financial-education
  // 'xxx', // reading
  '85b42a40745f4e2392ed62e72d4dad6e', // oceanx
  // 'xxx', // stem
  'bcc6e12a0ddf4a17a8b600c6b880e3ed', // common-sense-student-resources
  '38eaaf9ec82a44f9ab6e7a44cb730f07', // pbs-kids
  '000409f81dbe5d1ba67101cb9fed4530', // touchable-earth
  '4e413158eac55422a5343af9fcfa8d59', // healthy-mind
  'c9d7f950ab6b5a1199e3d6c10d7f0103', // khan-academy
  '1e755450dede5c40af1487e07984c260', // techbridge-girls-home
  'e409b964366a59219c148f2aaa741f43', // blockly-games
  '3e464ee12f6a50a781cddf59147b48b1', // sikana-english
  'bbb4ea407a3c450cb18cbaa76f2d75cd', // cspathshala-english
  'fc47aee82e0153e2a30197d3fdee1128', // open-stax
  '197934f144305350b5820c7c4dd8e194', // phet-interactive-simulations
];

// These should match a file existing on static/thumbnails/NAME
export const ChannelCardThumbnails = {
  '1e378725d3924b47aa5e1260628820b5': 'ted-ed-lessons.jpg',
  e11462f71c6f5472b113311c69071b05: 'dance.jpg',
  '3160899a73564d8a8467284d9219b91c': 'terminal-two.jpg',
  '057f871caa405ec29d62ba0523c193d7': 'music.jpg',
  f62db29be20453c4a267132e93a9e602: 'wikipedia.jpg',
  '922e9c576c2f59e59389142b136308ff': 'career-girls.jpg',
  efcc464be5a85ba5a58d1636b00313fc: 'gardening.jpg',
  f5f6729f95b55753badeaa066fa6e986: 'healthy-body.jpg',
  e5b26962b0ee5d8487152d0987d32e44: '49ers-edu-digital-playbook.jpg',
  // financial-education
  // reading
  '85b42a40745f4e2392ed62e72d4dad6e': 'oceanx.jpg',
  // stem
  bcc6e12a0ddf4a17a8b600c6b880e3ed: 'common-sense-student-resources.jpg',
  '38eaaf9ec82a44f9ab6e7a44cb730f07': 'pbs-kids.jpg',
  '000409f81dbe5d1ba67101cb9fed4530': 'touchable-earth.jpg',
  '4e413158eac55422a5343af9fcfa8d59': 'healthy-mind.jpg',
  c9d7f950ab6b5a1199e3d6c10d7f0103: 'khan-academy.jpg',
  '1e755450dede5c40af1487e07984c260': 'techbridge-girls-home.jpg',
  e409b964366a59219c148f2aaa741f43: 'blockly-games.jpg',
  '3e464ee12f6a50a781cddf59147b48b1': 'sikana-english.jpg',
  bbb4ea407a3c450cb18cbaa76f2d75cd: 'cspathshala-english.jpg',
  fc47aee82e0153e2a30197d3fdee1128: 'open-stax.jpg',
  '197934f144305350b5820c7c4dd8e194': 'phet-interactive-simulations.jpg',
};

export const GameAppIDs = [
  '3160899a73564d8a8467284d9219b91c', // Terminal Two
];

export function getBigThumbnail(channel) {
  if (channel.id in ChannelCardThumbnails) {
    return urls.static(`thumbnails/${ChannelCardThumbnails[channel.id]}`);
  }
  return null;
}
