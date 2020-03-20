/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { close } from '@wordpress/icons';

const PluginComplementaryAreaHeader = ( {
	smallScreenTitle,
	toggleShortcut,
	onClose,
	children,
	className,
	closeLabel,
} ) => {
	return (
		<>
			<div className="components-panel__header interface-plugin-complementary-area-header__small">
				<span className="interface-plugin-complementary-area-header__small-title">
					{ smallScreenTitle || __( '(no title)' ) }
				</span>
				<Button
					onClick={ closeComplementaryArea }
					icon={ close }
					label={ closeLabel }
				/>
			</div>
			<div
				className={ classnames(
					'components-panel__header',
					'interface-plugin-complementary-area-header',
					className
				) }
			>
				{ children }
				<Button
					onClick={ closeComplementaryArea }
					icon={ close }
					label={ closeLabel }
					shortcut={ toggleComplementaryAreaShortcut }
				/>
			</div>
		</>
	);
};

export default PluginComplementaryAreaHeader;
