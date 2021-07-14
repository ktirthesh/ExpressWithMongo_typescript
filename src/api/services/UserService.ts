interface IUserData {
  name: string;
  id: number;
}
interface IUserService {
  userProfileData(): IUserData;
}
class UserService1 implements IUserService {
  public userProfileData(): IUserData {
    try {
      return {
        name: "Rishabh",
        id: 1820,
      };
    } catch (e) {
      throw e;
    }
  }
}
export default new UserService1();
