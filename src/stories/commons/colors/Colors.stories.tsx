import { ComponentStory, ComponentMeta } from '@storybook/react';
import ColorsComponent from './Colors';

export default {
  title: 'Commons/Colors',
  component: ColorsComponent,
  argTypes: {},
} as ComponentMeta<typeof ColorsComponent>;

const Template: ComponentStory<typeof ColorsComponent> = (args) => <ColorsComponent />;

export const Colors  = Template.bind({});
