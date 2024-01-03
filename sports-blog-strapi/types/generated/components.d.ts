import type { Schema, Attribute } from '@strapi/strapi';

export interface InfoBlockButtonButton extends Schema.Component {
  collectionName: 'components_info_block_button_buttons';
  info: {
    displayName: 'button';
    icon: 'arrowRight';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    slug: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'info-block-button.button': InfoBlockButtonButton;
    }
  }
}
