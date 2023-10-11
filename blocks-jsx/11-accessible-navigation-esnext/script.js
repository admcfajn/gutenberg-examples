console.log('scripts.js')
import { createRoot } from 'react-dom/client';
import UxComponent from './ux.js';

document.addEventListener('DOMContentLoaded', function() {

    const uxComponents = Array.from( document.getElementsByClassName('test-ux-component') );

    if ( uxComponents.length ) {
        uxComponents.forEach( ( currentItem ) => {
            const root = createRoot( currentItem ); // createRoot(currentItem!) if using TypeScript
            root.render(<UxComponent />);
        } );
    }

});

