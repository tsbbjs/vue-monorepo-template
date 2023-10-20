import { defineComponent, h } from 'vue';

export default defineComponent({
  name: 'Simple',
  props: {
    title: {
      type: String,
      default: 'title',
    },
  },
  setup(props) {
    return () => {
      return <div>Package Simple: {props.title}</div>;
    };
  },
});
