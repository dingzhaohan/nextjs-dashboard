/**
 * v0 by Vercel.
 * @see https://v0.dev/t/NBQzw4uzOAo
 */
import { Button } from "@/components/ui/button"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Progress } from "@nextui-org/react"

export default function Component() {
  return (
    <div key="1" className="flex min-h-screen bg-gray-100">
      
      <main className="flex-1">
        <div className="px-6 py-4">
          <div className="flex justify-between">
            <div className="flex space-x-2">
            <Button className="w-full justify-start rounded-md bg-blue-500 px-3 py-2 text-left text-sm font-medium text-white hover:bg-blue-600 ml-auto">
              + 添加新上传
            </Button>
              {/* <Select>
                <SelectTrigger id="material-type">
                  <SelectValue placeholder="材料数据库类型" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="type1">材料数据库类型</SelectItem>
                  <SelectItem value="type2">正版材料数据库</SelectItem>
                  <SelectItem value="type3">新版本材料</SelectItem>
                </SelectContent>
              </Select> */}
              <Input placeholder="Search" />
            </div>
            <div className="flex items-center space-x-2">
              <BellIcon className="text-gray-600" />
              <UserCircleIcon className="text-gray-600" />
            </div>
          </div>
          <div className="mt-2">
            <Progress className="w-full" value={18} />
          </div>
          <div className="mt-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Id</TableHead>
                  <TableHead># b</TableHead>
                  <TableHead># a</TableHead>
                  <TableHead># Y</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>123</TableCell>
                  <TableCell>1.25714</TableCell>
                  <TableCell>4.7054</TableCell>
                  <TableCell>1.25714</TableCell>
                  <TableCell>4.7054</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>23</TableCell>
                  <TableCell>1.25714</TableCell>
                  <TableCell>4.7054</TableCell>
                  <TableCell>1.25714</TableCell>
                  <TableCell>4.7054</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>23</TableCell>
                  <TableCell>1.25714</TableCell>
                  <TableCell>4.7054</TableCell>
                  <TableCell>1.25714</TableCell>
                  <TableCell>4.7054</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>235</TableCell>
                  <TableCell>1.25714</TableCell>
                  <TableCell>4.7054</TableCell>
                  <TableCell>1.25714</TableCell>
                  <TableCell>4.7054</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>234</TableCell>
                  <TableCell>4f</TableCell>
                  <TableCell>4.7054</TableCell>
                  <TableCell>1.25714</TableCell>
                  <TableCell>4.7054</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>123</TableCell>
                  <TableCell>1.25714</TableCell>
                  <TableCell>4.7054</TableCell>
                  <TableCell>1.25714</TableCell>
                  <TableCell>4.7054</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <div className="mt-2 flex justify-between">
              <span className="text-sm text-gray-500">仅显示前面 100 行数据</span>
              <Button>导出</Button>
            </div>
          </div>
          <div className="mt-4 flex justify-center">
            <Button className="mx-2">Previous</Button>
            <Button className="mx-2">1</Button>
            <Button className="mx-2">2</Button>
            <Button className="mx-2">3</Button>
            <Button className="mx-2">Next</Button>
          </div>
        </div>
      </main>
    </div>
  )
}

function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function UserCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="10" r="3" />
      <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
    </svg>
  )
}
