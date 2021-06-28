interface MyUser {
  name: string;
  id: string;
  email?: string;
}

type MyUserOptionals = Partial<MyUser>;

const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => {
  return {
    ...user,
    ...overrides,
  };
};

console.log(
  merge(
    {
      id: "foo",
      name: "Pete",
      email: "donovan@op.com",
    },
    { email: "bazzy@op.com" }
  )
);

type RequiredMyUser = Required<MyUser>;

type JustEmailAndName = Pick<MyUser, "email" | "name">;

type UserWithoutID = Omit<MyUser, "id">;

const mapById = (users: MyUser[]): Record<MyUser["id"], UserWithoutID> => {
  return users.reduce((acc, val) => {
    const { id, ...other } = val;
    return {
      ...acc,
      [id]: other,
    };
  }, {});
};

console.log(
  mapById([
    { id: "foo", name: "Pete" },
    { id: "baz", name: "Marry" },
  ])
);
