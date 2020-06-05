import database

MENU_PROPMPT = """ == COFFEE BEAN APP ==
Please choose one of the options:
1) Add new bean,
2) See all beans,
3) Find a bean by name,
4) See which preparation method is best for a bean,
5) Exit
Your Selection:"""


def menu():
    conn = database.connect()
    database.create_tables(conn)
    while(user_input:=input(MENU_PROPMPT)) != "5":
        if user_input == "1":
            name = input("Enter bean name: ")
            method = input("Enter how you prepared it: ")
            rating = int(input("Enter your rating score (0-100): "))
            database.add_bean(conn, name, method, rating)
        elif user_input == "2":
            beans = database.get_all_beans(conn)
            for bean in beans:
                print(f"{bean[1]} ({bean[2]}) - {bean[3]}/100")
        elif user_input == "3":
            name = input("Enter bean name to find: ")
            beans = database.get_beans_by_name(conn, name)
            for bean in beans:
                print(f"{bean[1]} ({bean[2]}) - {bean[3]}/100")
        elif user_input == "4":
            name = input("Enter bean name to find: ")
            best_method = database.get_best_preparation_for_bean(conn, name)

            print(
                f"The best preparation method for {name} is: {best_method[2]} ")
        else:
            print("Invalid input, pleae try again:")


menu()
