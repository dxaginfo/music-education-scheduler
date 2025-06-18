import React from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';

// This component allows for integration between Material-UI and React Router
// It's used to make Material-UI components like ListItem, Button, etc. work as router links
const NavigationLink = React.forwardRef<HTMLAnchorElement, RouterLinkProps>((props, ref) => (
  <RouterLink ref={ref} {...props} />
));

export default NavigationLink;