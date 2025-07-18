"use client";
import { IconCancel, IconCheck } from "@/shared/components/icons";
import { allValue, commonClassNames, orderStatus } from "@/shared/constants";
import useQueryString from "@/hooks/useQueryString";
import { updateOrder } from "@/lib/actions/order.actions";
import { cn } from "@/lib/utils";
import {
  BadgeStatus,
  EmptySpace,
  Heading,
  Pagination,
} from "@/shared/components";
import { Input } from "@/shared/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table";
import { OrderStatus } from "@/shared/types/enums";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { OrderManagePageProps } from "../types/order.types";

const OrderManagePage = ({
  orders = [],
  totalPages = 1,
  total,
}: OrderManagePageProps) => {
  const handleUpdateOrder = async ({
    orderId,
    status,
  }: {
    orderId: string;
    status: OrderStatus;
  }) => {
    if (status === OrderStatus.CANCELED) {
      Swal.fire({
        title: "Bạn có chắc muốn hủy đơn hàng không?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Hủy luôn",
        cancelButtonText: "Thoát",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await updateOrder({ orderId, status });
        }
      });
    }
    if (status === OrderStatus.COMPLETED) {
      const res = await updateOrder({ orderId, status });
      if (res?.success) {
        toast.success("Cập nhật đơn hàng thành công");
      }
    }
  };
  const { handleSearchData, handleSelectStatus } = useQueryString();

  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:items-center gap-5 justify-between mb-10">
        <Heading className="">Quản lý đơn hàng</Heading>
        <div className="flex gap-3">
          <div className="w-full lg:w-[300px]">
            <Input
              placeholder="Tìm kiếm đơn hàng..."
              onChange={handleSearchData}
            />
          </div>
          <Select
            onValueChange={(value) => handleSelectStatus(value as OrderStatus)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Chọn trạng thái" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value={allValue}>Tất cả</SelectItem>
                {orderStatus.map((status) => (
                  <SelectItem value={status.value} key={status.value}>
                    {status.title}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Table className="table-responsive">
        <TableHeader>
          <TableRow>
            <TableHead>Mã đơn hàng</TableHead>
            <TableHead>Khóa học</TableHead>
            <TableHead>Thành viên</TableHead>
            <TableHead>Số tiền</TableHead>
            <TableHead>Mã giảm giá</TableHead>
            <TableHead>Trạng thái</TableHead>
            <TableHead>Hành động</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.length === 0 && <EmptySpace text="Không có đơn hàng!" />}
          {orders.length > 0 &&
            orders.map((order) => {
              const orderStatusItem = orderStatus.find(
                (item) => item.value === order.status
              );
              return (
                <TableRow key={order.code}>
                  <TableCell>
                    <strong>{order.code}</strong>
                  </TableCell>
                  <TableCell>{order.course.title}</TableCell>
                  <TableCell>{order.user?.name}</TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-2">
                      <span>{order.amount.toLocaleString("us-US")}</span>
                      {order.discount > 0 && (
                        <span>{order.discount.toLocaleString("us-US")}</span>
                      )}
                      <strong
                        className={cn(
                          orderStatusItem?.className,
                          "bg-transparent"
                        )}
                      >
                        {order.total.toLocaleString("us-US")}
                      </strong>
                    </div>
                  </TableCell>
                  <TableCell>
                    <strong>{order.coupon?.code || ""}</strong>
                  </TableCell>
                  <TableCell>
                    <BadgeStatus item={orderStatusItem}></BadgeStatus>
                  </TableCell>
                  <TableCell>
                    {order.status !== OrderStatus.CANCELED && (
                      <div className="flex gap-3">
                        {order.status === OrderStatus.PENDING && (
                          <button
                            type="button"
                            className={commonClassNames.action}
                            onClick={() =>
                              handleUpdateOrder({
                                orderId: order._id,
                                status: OrderStatus.COMPLETED,
                              })
                            }
                          >
                            <IconCheck />
                          </button>
                        )}
                        <button
                          type="button"
                          className={commonClassNames.action}
                          onClick={() =>
                            handleUpdateOrder({
                              orderId: order._id,
                              status: OrderStatus.CANCELED,
                            })
                          }
                        >
                          <IconCancel />
                        </button>
                      </div>
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
      <Pagination totalPages={totalPages} total={total}></Pagination>
    </div>
  );
};

export default OrderManagePage;
