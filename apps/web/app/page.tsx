import { Button } from "@workspace/ui/components/button";
import { Card } from "@workspace/ui/components/card";
import { Input } from "@workspace/ui/components/input";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <Card className=" w-96 p-10">
          <h1 className="text-2xl font-bold">Hello World</h1>
          <Input/>
          <Button size="sm">Button</Button>
        </Card>
      </div>
    </div>
  )
}
