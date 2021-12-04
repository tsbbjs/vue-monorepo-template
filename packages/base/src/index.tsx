import { defineComponent, h } from 'vue';

export default defineComponent({
  name: 'Base',
  props: {
    title: {
      type: String,
      defalut: 'title',
    },
  },
  setup(props) {
    const { title } = props;
    return () => {
      return <div>Package: {title}</div>;
    };
  },
});
