import { useAppRoute } from "./hooks/useAppRoute";
import DesignSystemScreen from "./screens/design-system/DesignSystemScreen";
import HomeScreen from "./screens/home/HomeScreen";

export default function App() {
  const appRoute = useAppRoute();

  if (appRoute === "designSystem") {
    return <DesignSystemScreen />;
  }

  return <HomeScreen />;
}
