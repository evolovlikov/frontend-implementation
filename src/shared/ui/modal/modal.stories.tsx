import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Modal} from 'shared/ui/modal/modal';
import {ThemeDecorator} from 'shared/config/storybook/theme-decorator/theme-decorator';
import {Theme} from 'app/providers/theme-provider';

export default {
	title: 'shared/Modal',
	component: Modal,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	isOpen: true,
	children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Aliquid commodi consequatur eligendi impedit incidunt necessitatibus possimus quis saepe sunt totam.\n `,
};

export const Dark = Template.bind({});
Dark.args = {
	isOpen: true,
	children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Aliquid commodi consequatur eligendi impedit incidunt necessitatibus possimus quis saepe sunt totam.\n `,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
