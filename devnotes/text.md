Move general register to special register
movgs Rd, Rs
0011 Rd Rs 1100 0000 0000 0000 0000
4 4 4 4 16
Copy the contents of general purpose register Rs
into special purpose register Rd.

Move special register to general register
movsg Rd, Rs
0011 Rd Rs 1101 0000 0000 0000 0000
4 4 4 4 16
Copy the contents of special purpose register Rs
into general purpose register Rd.

Break
break
0010 0000 0000 1100 0000 0000 0000 0000
4 4 4 4 16
Generate a breakpoint exception, transferring control to the exception handler.

System call
syscall
0010 0000 0000 1101 0000 0000 0000 0000
4 4 4 4 16
Generate a system call exception, transferring control to the exception handler.

Return from exception
rfe
0010 0000 0000 1110 0000 0000 0000 0000
4 4 4 4 16
Restore the saved interrupt enable and kernel/user mode bits and jump to the instruction at the address
specified in the special register $ear







