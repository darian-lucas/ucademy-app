type TActiveLinkProps = {
  url: string;
  children: React.ReactNode;
};

type TMenuItem = {
  url: string;
  title: string;
  icon: React.ReactNode;
};

type ICreateUserParams = {
  clerkId: string;
  username: string;
  email_address: string;
  name?: string;
  avatar?: string;
};

export { TActiveLinkProps, TMenuItem,ICreateUserParams };
