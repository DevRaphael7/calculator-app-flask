class Calculator:

    def __init__(self, num1: float, num2: float):
        self.number_one = num1
        self.number_two = num2

    def add(self):
        return self.number_one + self.number_two

    def less(self):
        return self.number_one - self.number_two

    def multiply(self):
        return self.number_one * self.number_two

    def divider(self):
        try:
            return self.number_one / self.number_two
        except ZeroDivisionError as e:
            print(e)
            return 0