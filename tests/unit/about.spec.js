import { shallowMount } from '@vue/test-utils';
import About from '@/views/About.vue';

describe('About.vue', () => {
  test('renders inner text', () => {
    const wrapper = shallowMount(About);

    expect(wrapper.text()).toContain(
      'Sky music is a free website that is created for all artists to upload their songs',
    );
  });
});
