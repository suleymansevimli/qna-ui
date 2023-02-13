import { ComponentStory, ComponentMeta } from '@storybook/react';
import ElevationComponent from './Elevation';

export default {
  title: 'Commons/Elevation',
  component: ElevationComponent,
  argTypes: {},
} as ComponentMeta<typeof ElevationComponent>;

const Template: ComponentStory<typeof ElevationComponent> = (args) => <ElevationComponent />;

export const Elevation  = Template.bind({});