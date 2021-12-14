export const Danger = ({ children }) => (
  <span dangerouslySetInnerHTML={{ __html: children }} />
);
