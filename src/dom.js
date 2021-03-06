const dom = (type, uncheckedProps = {}, ...uncheckedChildren) => {
  let children = [];
  let props = uncheckedProps;

  for (const child of uncheckedChildren) {
    if (Array.isArray(child)) {
      children = [...children, ...child];
    } else {
      children = [...children, typeof child === 'number' ? String(child) : child];
    }
  }

  if (uncheckedProps === null) { props = {}; }

  if (props.className) {
    props.class = props.className;
    props.className = undefined;
  }

  if (typeof type === 'function') {
    return type(props, children);
  }

  return { type, props, children };
};

export { dom };
