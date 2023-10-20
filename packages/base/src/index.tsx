import { defineComponent, h } from 'vue';

const defaultProps = {
  title: {
    type: String,
    default: 'title',
  },
};

export default defineComponent({
  name: 'Base',
  props: defaultProps,
  setup(props) {
    return () => {
      return <div>Package Base: {props.title}</div>;
    };
  },
});
