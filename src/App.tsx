import {Button} from "@/components/ui/button.tsx";


function App() {
  return (
      <div className="w-full h-full flex items-center justify-center min-h-screen">
          <Button variant="default">Button</Button>
          <Button variant="secondary">Button</Button>
          <Button variant="link">Button</Button>
          <Button variant="outline">Button</Button>
          <Button variant="ghost">Button</Button>
          <Button variant="destructive">Button</Button>
      </div>
  )
}

export default App
