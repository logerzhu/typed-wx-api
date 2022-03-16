export class AccessToken {
  readonly accessToken: string
  readonly expireTime: number

  constructor(accessToken: string, expireTime: number) {
    this.accessToken = accessToken
    this.expireTime = expireTime
  }

  isValid() {
    return !!this.accessToken && Date.now() < this.expireTime
  }
}

export abstract class TokenStorage {
  abstract load(): Promise<AccessToken | null>

  abstract save(token: AccessToken | null): Promise<void>
}

export class MemoryTokenStorage extends TokenStorage {
  private token: AccessToken | null = null

  async load() {
    return this.token
  }

  async save(token: AccessToken | null) {
    this.token = token
    if (process.env.NODE_ENV === 'production') {
      console.warn(
        "Don't save token in memory, when cluster or multi-computer!"
      )
    }
  }
}