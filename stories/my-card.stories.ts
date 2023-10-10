import { html, TemplateResult } from 'lit';
import '../src/my-card.js';

export default {
  title: 'MyCard',
  component: 'my-card',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  header?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({
  header,
  backgroundColor = 'white',
}: ArgTypes) => html`
  <my-card
    style="--my-card-background-color: ${backgroundColor}"
    .header=${header}
  ></my-card>
`;

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
