import { Entity } from '@/shared/domain/entities/entity';
import { validate } from 'uuid';

type StubProps = {
  props1: string;
  props2: number;
};

class StubEntity extends Entity<StubProps> {}

describe('Entity unit tests', () => {
  it('should set id and props', () => {
    const props = {
      props1: 'props1',
      props2: 2,
    };
    const entity = new StubEntity(props);

    expect(entity.props).toStrictEqual(props);
    expect(validate(entity.id)).toBeTruthy();
  });

  it('should accept a valid uuid', () => {
    const props = {
      props1: 'props1',
      props2: 2,
    };
    const id = '2a5e9ac8-e528-4ab0-bc6d-19c932334453';
    const entity = new StubEntity(props, id);

    expect(validate(entity.id)).toBeTruthy();
    expect(entity.id).toEqual(id);
  });

  it('should convert a entity to a JSON object', () => {
    const props = {
      props1: 'props1',
      props2: 2,
    };
    const id = '2a5e9ac8-e528-4ab0-bc6d-19c932334453';
    const entity = new StubEntity(props, id);

    expect(entity.toJSON()).toStrictEqual({ id, ...props });
  });
});
