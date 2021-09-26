import { toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

window.scrollTo = jest.fn();
global.open = jest.fn();
