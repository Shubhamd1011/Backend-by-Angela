/*
- Postman is a powerful tool for testing backend APIs like the one you're building with Express.

- The main goal for client server model is getting req from client and send a response from server to client.
- Sometimes it send plane text, html or some times it send a standard status code (liek 404).
1. Informational response (100-199).
2. Succesful response (200-299).
3. Redirection mesage (300-399).
4. Client error response (400-499).
5. Server error response (500-599).

✅ 1xx – Informational
| Code | Meaning             | Use Case                               |
| ---- | ------------------- | -------------------------------------- |
| 100  | Continue            | Interim response; rarely used manually |
| 101  | Switching Protocols | WebSockets, protocol upgrades          |

✅ 2xx – Success
| Code | Meaning    | Use Case                                        |
| ---- | ---------- | ----------------------------------------------- |
| 200  | OK         | Standard success response                       |
| 201  | Created    | Resource successfully created (e.g., POST)      |
| 202  | Accepted   | Request accepted but processing later           |
| 204  | No Content | Success with no content returned (e.g., DELETE) |

✅ 3xx – Redirection
| Code | Meaning           | Use Case                  |
| ---- | ----------------- | ------------------------- |
| 301  | Moved Permanently | Resource moved to new URL |
| 302  | Found             | Temporary redirect        |
| 304  | Not Modified      | Cache validation success  |

✅ 4xx – Client Errors
| Code | Meaning              | Use Case                            |
| ---- | -------------------- | ----------------------------------- |
| 400  | Bad Request          | Malformed request or invalid input  |
| 401  | Unauthorized         | Authentication required             |
| 403  | Forbidden            | Access denied even if authenticated |
| 404  | Not Found            | Resource doesn’t exist              |
| 405  | Method Not Allowed   | Wrong HTTP method used              |
| 409  | Conflict             | Resource conflict (e.g., duplicate) |
| 422  | Unprocessable Entity | Validation error                    |

✅ 5xx – Server Errors
| Code | Meaning               | Use Case                              |
| ---- | --------------------- | ------------------------------------- |
| 500  | Internal Server Error | Generic server failure                |
| 501  | Not Implemented       | Server doesn’t support feature        |
| 502  | Bad Gateway           | Invalid response from upstream server |
| 503  | Service Unavailable   | Server temporarily down               |


-Key tip for understanding or remembering :-
1. 100-199 -----> Hold on.
2. 200-299 -----> Here you go.
3. 300-399 ------> Go Away.
4. 400-499 -------> Its your fault.
5. 500-599 -------> Its servers fault.






 */