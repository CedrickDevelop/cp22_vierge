import {$, T} from "../../common/drupal/drupal";
/**
 * Class de gestion du header mobile
 */
class Header {

    /**
     * init
     */
    init(){
      console.log('hello header');
    }



    /**
     * Attach.
     * @param context
     */
    attach(context) {
        if (T.contextIsRoot(context)) {
            this.init();
        }
    }
}

export let header = new Header();
