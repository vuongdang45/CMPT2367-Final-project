/**
 * /!\ This file is auto-generated.
 *
 * This is the entry point of your standalone application.
 *
 * There are multiple tags used by the editor to inject code automatically:
 *     - `wle:auto-imports:start` and `wle:auto-imports:end`: The list of import statements
 *     - `wle:auto-register:start` and `wle:auto-register:end`: The list of component to register
 *     - `wle:auto-constants:start` and `wle:auto-constants:end`: The project's constants,
 *        such as the project's name, whether it should use the physx runtime, etc...
 *     - `wle:auto-benchmark:start` and `wle:auto-benchmark:end`: Append the benchmarking code
 */

/* wle:auto-imports:start */
import {Cursor} from '@wonderlandengine/components';
import {CursorTarget} from '@wonderlandengine/components';
import {FingerCursor} from '@wonderlandengine/components';
import {HandTracking} from '@wonderlandengine/components';
import {HowlerAudioListener} from '@wonderlandengine/components';
import {ImageTexture} from '@wonderlandengine/components';
import {MouseLookComponent} from '@wonderlandengine/components';
import {PlayerHeight} from '@wonderlandengine/components';
import {TeleportComponent} from '@wonderlandengine/components';
import {VideoTexture} from '@wonderlandengine/components';
import {VrModeActiveSwitch} from '@wonderlandengine/components';
import {WasdControlsComponent} from '@wonderlandengine/components';
import {ColorPallete} from './ColorPallete.js';
import {DrawableCanvas} from './DrawableCanvas.js';
import {Pencil} from './Pencil.js';
import {ButtonComponent} from './button.js';
import {Custom} from './custom.js';
import {MyCanvasTexture} from './miniMap.js';
import {textScroller} from './scroll.js';
import {UIHandler} from './uiHandler.js';
import {GrabbableComponent} from './../pp/index.js';
import {GrabberHandComponent} from './../pp/index.js';
import {PPGatewayComponent} from './../pp/index.js';
/* wle:auto-imports:end */

import {loadRuntime} from '@wonderlandengine/api';
import * as API from '@wonderlandengine/api'; // Deprecated: Backward compatibility.


/* wle:auto-constants:start */
const Constants = {
    ProjectName: 'CMPT2367-Project',
    RuntimeBaseName: 'WonderlandRuntime',
    WebXRRequiredFeatures: ['local',],
    WebXROptionalFeatures: ['local','local-floor','hand-tracking','hit-test',],
};
const RuntimeOptions = {
    physx: true,
    loader: false,
    xrFramebufferScaleFactor: 1,
    xrOfferSession: {
        mode: 'auto',
        features: Constants.WebXRRequiredFeatures,
        optionalFeatures: Constants.WebXROptionalFeatures,
    },
    canvas: 'canvas',
};
/* wle:auto-constants:end */

const engine = await loadRuntime(Constants.RuntimeBaseName, RuntimeOptions);
Object.assign(engine, API); // Deprecated: Backward compatibility.
window.WL = engine; // Deprecated: Backward compatibility.

engine.onSceneLoaded.once(() => {
    const el = document.getElementById('version');
    if (el) setTimeout(() => el.remove(), 2000);
});

/* WebXR setup. */

function requestSession(mode) {
    engine
        .requestXRSession(mode, Constants.WebXRRequiredFeatures, Constants.WebXROptionalFeatures)
        .catch((e) => console.error(e));
}

function setupButtonsXR() {
    /* Setup AR / VR buttons */
    const arButton = document.getElementById('ar-button');
    if (arButton) {
        arButton.dataset.supported = engine.arSupported;
        arButton.addEventListener('click', () => requestSession('immersive-ar'));
    }
    const vrButton = document.getElementById('vr-button');
    if (vrButton) {
        vrButton.dataset.supported = engine.vrSupported;
        vrButton.addEventListener('click', () => requestSession('immersive-vr'));
    }
}

if (document.readyState === 'loading') {
    window.addEventListener('load', setupButtonsXR);
} else {
    setupButtonsXR();
}

/* wle:auto-register:start */
engine.registerComponent(Cursor);
engine.registerComponent(CursorTarget);
engine.registerComponent(FingerCursor);
engine.registerComponent(HandTracking);
engine.registerComponent(HowlerAudioListener);
engine.registerComponent(ImageTexture);
engine.registerComponent(MouseLookComponent);
engine.registerComponent(PlayerHeight);
engine.registerComponent(TeleportComponent);
engine.registerComponent(VideoTexture);
engine.registerComponent(VrModeActiveSwitch);
engine.registerComponent(WasdControlsComponent);
engine.registerComponent(ColorPallete);
engine.registerComponent(DrawableCanvas);
engine.registerComponent(Pencil);
engine.registerComponent(ButtonComponent);
engine.registerComponent(Custom);
engine.registerComponent(MyCanvasTexture);
engine.registerComponent(textScroller);
engine.registerComponent(UIHandler);
engine.registerComponent(GrabbableComponent);
engine.registerComponent(GrabberHandComponent);
engine.registerComponent(PPGatewayComponent);
/* wle:auto-register:end */

engine.scene.load(`${Constants.ProjectName}.bin`).catch((e) => {
    console.error(e);
    window.alert(`Failed to load ${Constants.ProjectName}.bin:`, e);
});

/* wle:auto-benchmark:start */
/* wle:auto-benchmark:end */
