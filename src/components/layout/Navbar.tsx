import Header from "./Header";

/**
 * Navbar – thin layout wrapper that re-exports Header.
 * Import <Navbar /> wherever you need the sticky top navigation.
 */
export default function Navbar() {
  return <Header />;
}
