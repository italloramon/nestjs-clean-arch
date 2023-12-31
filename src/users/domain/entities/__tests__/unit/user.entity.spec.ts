import { UserEntity, UserProps } from '@/users/domain/entities/user.entity';
import { UserDataBuilder } from '@/users/domain/testing/helpers/user-data-builder';

describe('UserEntity unit tests', () => {
  let props: UserProps;
  let sut: UserEntity;

  beforeEach(() => {
    props = UserDataBuilder({});
    sut = new UserEntity(props);
  });

  it('Constructor method', () => {
    expect(sut.props.name).toEqual(props.name);
    expect(sut.props.email).toEqual(props.email);
    expect(sut.props.password).toEqual(props.password);
    expect(sut.props.createdAt).toBeInstanceOf(Date);
  });

  it('Getter name', () => {
    expect(sut.name).toBeDefined();
    expect(sut.name).toEqual(props.name);
    expect(typeof sut.name).toBe('string');
  });

  it('Setter name', () => {
    sut['name'] = 'other name';
    expect(sut.props.name).toEqual('other name');
    expect(typeof sut.props.name).toBe('string');
  });

  it('Getter email', () => {
    expect(sut.email).toBeDefined();
    expect(sut.email).toEqual(props.email);
    expect(typeof sut.email).toBe('string');
  });

  it('Getter password', () => {
    expect(sut.password).toBeDefined();
    expect(sut.password).toEqual(props.password);
    expect(typeof sut.password).toBe('string');
  });

  it('Setter password', () => {
    sut['password'] = 'password';
    expect(sut.props.password).toEqual('password');
    expect(typeof sut.props.name).toBe('string');
  });

  it('Getter createdAt', () => {
    expect(sut.createdAt).toBeDefined();
    expect(sut.createdAt).toBeInstanceOf(Date);
  });

  it('Should update a user name', () => {
    sut.update('new name');
    expect(sut.props.name).toEqual('new name');
  });

  it('Should update a user password', () => {
    sut.updatePassword('new password');
    expect(sut.props.password).toEqual('new password');
  });
});
