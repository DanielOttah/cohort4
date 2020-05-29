# Files
# Files are named locations on disk to store related information.
# They are used to permanently store data in a non-volatile memory (e.g. hard disk).
# Since Random Access Memory (RAM) is volatile (which loses its data when the computer is turned off),
# we use files for future use of the data by permanently storing them.
# Hence, in Python, a file operation takes place in the following order:
# 1. Open a file
# 2. Read or write (perform operation)
# 3. Close the file
# ============= OPEN A FILE =====================
# f = open("test.txt")    # open file in current directory
# f = open("C:/Python38/README.txt")  # specifying full path

# r	Opens a file for reading. (default)
# w	Opens a file for writing. Creates a new file if it does not exist or truncates the file if it exists.
# x	Opens a file for exclusive creation. If the file already exists, the operation fails.
# a	Opens a file for appending at the end of the file without truncating it. Creates a new file if it does not exist.
# t	Opens in text mode. (default)
# b	Opens in binary mode.
# +	Opens a file for updating (reading and writing)

# EG
# f = open("test.txt")      # equivalent to 'r' or 'rt'
# f = open("test.txt",'w')  # write in text mode
# f = open("img.bmp",'r+b') # read and write in binary mode

# NB
# Hence, when working with files in text mode, it is highly recommended to specify the encoding type.
# f = open("test.txt", mode='r', encoding='utf-8')

# ============= CLOSE A FILE | WRITE TO A FILE =====================
# NB: # In order to write into a file in Python, we need to open it in write w*, append a or exclusive creation x mode.
# W* CAN REWRITE TO THE FILE AND ERASE ANY PRIOR INFORMATION/DATA IN THE FILE!!!

# try:
#    f = open("test.txt", encoding = 'utf-8')
#    # perform file operations
# finally:
#    f.close()

# OR Use

# with open("test.txt",'w',encoding = 'utf-8') as f:
#    f.write("my first file\n")
#    f.write("This file\n\n")
#    f.write("contains three lines\n")

# ============= READ A FILE =====================
# >>> f = open("test.txt",'r',encoding = 'utf-8')
# >>> f.read(4)    # read the first 4 data
# f.read(4)    # read the next 4 data
# f.read()     # read in the rest till end of file
# f.read()  # further reading returns empty sting


# We can read a file line-by-line using a for loop.
# nb the end parameter is a built-in parameter in print method that stops printiong of empty lines
# for line in f:
#     print(line, end='')

# Alternatively, we can use the readline() method to read individual lines of a file
# f.readline()

# the readlines() method returns a list of remaining lines of the entire file

# ============= DELETING PYTHON FILE =====================
# import os
# os.remove("demofile.txt") #Delete file

# Check if it exist before deleting
# import os
# if os.path.exists("demofile.txt"):
#   os.remove("demofile.txt")
# else:
#   print("The file does not exist")

# Delete folder
#   import os
# os.rmdir("myfolder")
# ============= ALL PYTHON FILE METHODS =====================
# Method	Description
# close()	Closes an opened file. It has no effect if the file is already closed.
# detach()	Separates the underlying binary buffer from the TextIOBase and returns it.
# fileno()	Returns an integer number (file descriptor) of the file.
# flush()	Flushes the write buffer of the file stream.
# isatty()	Returns True if the file stream is interactive.
# read(n)	Reads at most n characters from the file. Reads till end of file if it is negative or None.
# readable()	Returns True if the file stream can be read from.
# readline(n=-1)	Reads and returns one line from the file. Reads in at most n bytes if specified.
# readlines(n=-1)	Reads and returns a list of lines from the file. Reads in at most n bytes/characters if specified.
# seek(offset,from=SEEK_SET)	Changes the file position to offset bytes, in reference to from (start, current, end).
# seekable()	Returns True if the file stream supports random access.
# tell()	Returns the current file location.
# truncate(size=None)	Resizes the file stream to size bytes. If size is not specified, resizes to current location.
# writable()	Returns True if the file stream can be written to.
# write(s)	Writes the string s to the file and returns the number of characters written.
# writelines(lines)	Writes a list of lines to the file.

# ============= PYTHON FILE DIRECTORY =====================

# # returns all files and directory properties such as file size and modification date.
# with os.scandir('my_directory/') as entries:

# This lists all the directories in the path
# with os.scandir(_path) as dir:
# for entries in dir:
# print(entries.name)
#

# This lists all the files/subdirectories in the path
# with os.scandir(_path) as dir:
# for entries in dir:
# if entries.is_file() / if entries.is_dir()
# print(entries.name)

# Walking a directory tree and printing the names of the directories and files
# for dirpath, dirnames, files in os.walk('.'):
#     print(f'Found directory: {dirpath}')
#     for file_name in files:
#         print(file_name)
