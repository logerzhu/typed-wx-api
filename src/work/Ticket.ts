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
}

export abstract class TicketStorage {
  abstract load(type: string): Promise<Ticket | null>

  abstract save(type: string, ticket: Ticket | null): Promise<void>
}

export class MemoryTicketStorage extends TicketStorage {
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