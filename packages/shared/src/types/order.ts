export const ORDER_STATUS = {
  Pending: 'PENDING',
  Preparing: 'PREPARING',
  Served: 'SERVED',
  Paid: 'PAID',
  Cancelled: 'CANCELLED',
} as const

export type OrderStatus = (typeof ORDER_STATUS)[keyof typeof ORDER_STATUS]

export interface OrderItem {
  menuItemId: string
  name: string
  quantity: number
  unitPrice: number
}

export interface Order {
  id: string
  tableNumber: number
  items: OrderItem[]
  status: OrderStatus
  createdAt: string
}
