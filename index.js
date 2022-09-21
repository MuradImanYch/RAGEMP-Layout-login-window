let browser;
let sceneryCamera;

mp.events.add('showLoginDialog', () => {
    browser = mp.browsers.new('package://CAG DM/browser/index.html');
    browser.execute('mp.invoke("focus", true)');
    mp.gui.chat.activate(false);
    
    sceneryCamera = mp.cameras.new('default', new mp.Vector3(1898.1380615234375, 3418.297607421875, 164.85955810546875), new mp.Vector3(0,0,0), 40);
    sceneryCamera.pointAtCoord(-32000.120, 60000.120, -11000.120); // Changes the rotation of the camera to point towards a location
    sceneryCamera.setActive(true);
    mp.game.cam.renderScriptCams(true, true, 0, true, false);
});

mp.events.add('hideLoginDialog', () => {
    browser.execute("mp.invoke('focus', false)");
    browser.active = false;
    mp.gui.chat.activate(true);

    mp.game.cam.renderScriptCams(false, true, 1000, true, false);
});

mp.events.add('loginAttempt', (data) => {
    mp.events.callRemote('onLoginAttempt', data);
});

mp.events.add('registerAttempt', (data) => {
    mp.events.callRemote('onRegisterAttempt', data);
});

mp.events.add('showAuthError', (errorMessage) => {
    browser.execute(`showError("${errorMessage}")`);
}); 

mp.events.add('showLocalTime', () => {
    browser = mp.browsers.new('package://CAG DM/browser/time.html');
});

mp.events.add('hideLocalTime', () => {
    browser.active = false;
});