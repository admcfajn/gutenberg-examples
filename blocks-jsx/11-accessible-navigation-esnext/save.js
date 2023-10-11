console.log('save.js')
/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
// blockClass 

/**
 * Internal dependencies
 */
import { blockStyle } from './index';

// const blockProps = useBlockProps( {
// 	className: 'my-random-classname',
// } );
// return <div { ...blockProps }>Your block.</div>;

const Save = () => {
	const blockProps = useBlockProps.save( { style: blockStyle, className: 'test-ux-component' } );
	return (
		<div { ...blockProps }>
			{ __(
				'Hello World, step 1 (from the frontend).',
				'gutenberg-examples'
			) }
		</div>
	);
};
export default Save;
