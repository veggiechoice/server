class AppError {
  public readonly message: string;

  public readonly status: string;

  public readonly statusCode: number;

  constructor(message: string, status = 'error', statusCode = 400) {
    this.status = status;
    this.message = message;
    this.statusCode = statusCode;
  }
}

export default AppError;
