import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {ThemeDecorator} from 'shared/config/storybook/theme-decorator/theme-decorator';
import {Theme} from 'app/providers/theme-provider';
import {NotFoundPage} from './not-found-page';

export default {
	title: 'pages/NotFoundPage',
	component: NotFoundPage,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = (args) => <NotFoundPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];