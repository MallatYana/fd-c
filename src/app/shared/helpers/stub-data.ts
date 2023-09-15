import { WishlistItem } from '../../core/models/wishlist-item';
import { Guid } from 'guid-typescript';

export const userWishes: WishlistItem[] = [
  {
    id: '1',
    userId: Guid.create(),
    mainDescription:
      'Proin in ornare lacus. Duis non lacus sit amet mi ullamcorper finibus. Quisque posuere elementum lorem fermentum ultrices. Nunc vitae mi rutrum neque ' +
      'pharetra congue. Fusce scelerisque nunc hendrerit massa auctor, eu iaculis nibh sodales. ',
    extraDescription:
      'Vestibulum faucibus eget lectus in lacinia. Praesent auctor, orci non rhoncus scelerisque, nisi magna porta nibh, non faucibus nisl erat ac lorem. Mauris aliquet fringilla nibh pharetra feugiat.' +
      ' Proin in ornare lacus. Duis non lacus sit amet mi ullamcorper finibus. Quisque posuere elementum lorem fermentum ultrices. Nunc vitae mi rutrum neque pharetra congue. Fusce scelerisque' +
      ' nunc hendrerit massa auctor, eu iaculis nibh sodales. Nam laoreet diam a nisl sagittis accumsan. ' +
      'Fusce a nisl eget eros porta gravida. Integer luctus commodo turpis, at pulvinar neque condimentum pulvinar.',
    assignCreatorId: Guid.create(),
    assignCreatorNickName: 'Lorem loremich',
    assignCreatorUrl: '/creators/id',
  },
  {
    id: '2',
    userId: Guid.create(),
    mainDescription: 'Phasellus non ante magna. Curabitur orci nibh, rutrum et vulputate quis',
    extraDescription: null,
    assignCreatorId: Guid.create(),
    assignCreatorNickName: 'Wolf and herbs',
    assignCreatorUrl: '/creators/id',
  },
  {
    id: '321',
    userId: Guid.create(),
    mainDescription:
      'Sed aliquet dictum purus, a convallis mi congue vitae. In vulputate nunc ac dolor mattis consequat' +
      ' sit amet non libero. Pellentesque lectus erat, interdum ut posuere eu, aliquam at ligula. Etiam facilisis ' +
      'sem justo, ut pretium risus tincidunt nec. Proin nec rutrum tortor, a facilisis ipsum. ',
    extraDescription:
      'Phasellus non ante magna. Curabitur orci nibh, rutrum et vulputate quis, vulputate eu odio. Etiam ' +
      'accumsan aliquet ornare. Donec pharetra quam ex, sit amet commodo nisi posuere nec. Donec bibendum ipsum sed eleifend ' +
      'dapibus. Curabitur commodo congue nulla, eget luctus est fringilla tincidunt. Maecenas sit amet metus dapibus ipsum ' +
      'vestibulum placerat ac eget ipsum. Praesent semper bibendum elit quis porta. Etiam et egestas nunc, a sodales felis. ' +
      'Donec lectus neque, scelerisque a leo vitae, euismod sagittis purus. Phasellus tempor interdum massa, sit amet rhoncus' +
      ' mauris tincidunt sit amet. Nunc aliquet risus id est rutrum, a ultricies libero iaculis. Sed condimentum ullamcorper ' +
      'urna vitae sollicitudin. ' +
      'Maecenas dapibus finibus quam consectetur sagittis. Ut erat nibh, imperdiet a eros quis, rhoncus luctus dui.',
    assignCreatorId: Guid.create(),
    assignCreatorNickName: 'AbC',
    assignCreatorUrl: '/creators/id',
  },
  {
    id: '224',
    userId: Guid.create(),
    mainDescription: 'Vestibulum lorem purus, euismod eu lacinia eget, finibus laoreet lacus. ',
    extraDescription:
      'Sed vel felis purus. Integer pretium ipsum sed risus suscipit, et pellentesque nisl ornare. ' +
      'Morbi euismod finibus massa, non aliquet nisi fringilla vel.',
    assignCreatorId: null,
    assignCreatorNickName: null,
    assignCreatorUrl: null,
  },
];
