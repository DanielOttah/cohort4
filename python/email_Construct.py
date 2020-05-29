
def emailApp(fname: str, lname: str):
    if fname == "" or lname == "":
        # return f"first and last name cannot be empty!"
        return
    else:
        email = f"{fname.lower()}.{lname.lower()}@evolveu.ca"
        return email


# print(emailApp("Leinads", "Ottah"))
