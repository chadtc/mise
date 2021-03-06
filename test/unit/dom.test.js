import { dom } from '../../src/';

describe('DOM jsx tests', () => {
  it('should be defined', () => {
    expect(dom).toBeDefined();
  });

  it('should properly handle a tag with no children or props', () => {
    const element = dom('main');

    expect(element).toEqual({
      type: 'main',
      props: {},
      children: [],
    });
  });

  it('should properly handle a tag with a null prop', () => {
    const element = dom('main', null);

    expect(element).toEqual({
      type: 'main',
      props: {},
      children: [],
    });
  });

  it('should properly handle a tag with children but no props', () => {
    const children = ['article', 'aside', 'section'];
    const element = dom('main', {}, ...children);

    expect(element).toEqual({
      type: 'main',
      props: {},
      children,
    });
  });

  it('should properly handle a tag with props but no children', () => {
    const props = {
      id: 'news',
      className: 'main-section',
    };

    const element = dom('main', props);

    expect(element).toEqual({
      type: 'main',
      props,
      children: [],
    });
  });

  it('should handle a child being a number', () => {
    const element = dom('li', {}, 0);

    expect(element).toEqual({
      type: 'li',
      props: {},
      children: ['0'],
    });
  });

  it('should properly handle children being an array', () => {
    const children = ['article', 'aside', 'section'];
    const element = dom('main', {}, children);

    expect(element).toEqual({
      type: 'main',
      props: {},
      children,
    });
  });

  it('should handle a function as a type', () => {
    const statelessComponent = (props, children) => dom('div', props, children);
    let element = dom(statelessComponent);

    expect(element).toEqual({
      type: 'div',
      props: {},
      children: [],
    });

    const props = { id: 'thing', className: 'thing-haver' };
    element = dom(statelessComponent, props);

    expect(element).toEqual({
      type: 'div',
      props,
      children: [],
    });

    const secondProps = { id: 'second-thing', className: 'thing-haver' };
    element = dom(statelessComponent, props, [
      dom(statelessComponent, secondProps, []),
    ]);

    expect(element).toEqual({
      type: 'div',
      props,
      children: [
        {
          type: 'div',
          props: secondProps,
          children: [],
        },
      ],
    });
  });
});
