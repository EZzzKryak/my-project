import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title',
    text: 'Text lorem ipsum dolor sit amet',
};

export const Error = Template.bind({});
Error.args = {
    title: 'Title',
    text: 'Text lorem ipsum dolor sit amet',
    theme: TextTheme.ERROR,
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'Title',
};

export const onlyText = Template.bind({});
onlyText.args = {
    text: 'Text lorem ipsum dolor sit amet',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Title',
    text: 'Text lorem ipsum dolor sit amet',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
    title: 'Title',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
    text: 'Text lorem ipsum dolor sit amet',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
