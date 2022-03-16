export class Ticket {
  readonly ticket: string
  readonly expireTime: number

  constructor(ticket: string, expireTime: number) {
    this.ticket = ticket
    this.expireTime = expireTime
  }

  isValid() {
    return !!this.ticket && Date.now() < this.expireTime
  }

  toJSON() {
    return { ticket: this.ticket, expireTime: this.expireTime }
  }

  static fromJSON(value: any) {
    if (value?.ticket && value?.expireTime) {
      return new Ticket(value.ticket, value.expireTime)
    } else {
      return null
    }
  }
}

export interface TicketStorage {
  load(type: string): Promise<Ticket | null>

  save(type: string, ticket: Ticket | null): Promise<void>
}

export class MemoryTicketStorage implements TicketStorage {
  private ticketStore: { [type: string]: Ticket } = {}

  async load(type: string) {
    return this.ticketStore[type]
  }

  async save(type: string, ticket: Ticket) {
    this.ticketStore[type] = ticket
    if (process.env.NODE_ENV === 'production') {
      console.warn(
        "Don't save ticket in memory, when cluster or multi-computer!"
      )
    }
  }
}
