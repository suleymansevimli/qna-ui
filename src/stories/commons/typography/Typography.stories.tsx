import { ComponentStory, ComponentMeta } from '@storybook/react';
import TypographyComponent from './typography';

export default {
  title: 'Commons/Typography',
  component: TypographyComponent,
  argTypes: {},
} as ComponentMeta<typeof TypographyComponent>;

const Template: ComponentStory<typeof TypographyComponent> = (args) => <TypographyComponent />;

export const Typography  = Template.bind({});