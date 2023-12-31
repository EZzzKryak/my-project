import { ComponentMeta, ComponentStory } from '@storybook/react';
import { LoginForm } from './LoginForm';
import 'app/styles/index.scss';

export default {
    title: 'features/LoginStories',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
