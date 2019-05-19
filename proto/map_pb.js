/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.proto.GetBusesLocationRequest', null, global);
goog.exportSymbol('proto.proto.GetBusesLocationResponse', null, global);
goog.exportSymbol('proto.proto.GetBusesLocationResponse.BusLocation', null, global);
goog.exportSymbol('proto.proto.LatLng', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.GetBusesLocationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.GetBusesLocationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.proto.GetBusesLocationRequest.displayName = 'proto.proto.GetBusesLocationRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.GetBusesLocationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.GetBusesLocationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.GetBusesLocationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.GetBusesLocationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.GetBusesLocationRequest}
 */
proto.proto.GetBusesLocationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.GetBusesLocationRequest;
  return proto.proto.GetBusesLocationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.GetBusesLocationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.GetBusesLocationRequest}
 */
proto.proto.GetBusesLocationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.GetBusesLocationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.GetBusesLocationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.GetBusesLocationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.GetBusesLocationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.GetBusesLocationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.GetBusesLocationResponse.repeatedFields_, null);
};
goog.inherits(proto.proto.GetBusesLocationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.proto.GetBusesLocationResponse.displayName = 'proto.proto.GetBusesLocationResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.GetBusesLocationResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.GetBusesLocationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.GetBusesLocationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.GetBusesLocationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.GetBusesLocationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    busesLocationList: jspb.Message.toObjectList(msg.getBusesLocationList(),
    proto.proto.GetBusesLocationResponse.BusLocation.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.GetBusesLocationResponse}
 */
proto.proto.GetBusesLocationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.GetBusesLocationResponse;
  return proto.proto.GetBusesLocationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.GetBusesLocationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.GetBusesLocationResponse}
 */
proto.proto.GetBusesLocationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.GetBusesLocationResponse.BusLocation;
      reader.readMessage(value,proto.proto.GetBusesLocationResponse.BusLocation.deserializeBinaryFromReader);
      msg.addBusesLocation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.GetBusesLocationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.GetBusesLocationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.GetBusesLocationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.GetBusesLocationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusesLocationList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.proto.GetBusesLocationResponse.BusLocation.serializeBinaryToWriter
    );
  }
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.GetBusesLocationResponse.BusLocation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.GetBusesLocationResponse.BusLocation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.proto.GetBusesLocationResponse.BusLocation.displayName = 'proto.proto.GetBusesLocationResponse.BusLocation';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.GetBusesLocationResponse.BusLocation.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.GetBusesLocationResponse.BusLocation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.GetBusesLocationResponse.BusLocation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.GetBusesLocationResponse.BusLocation.toObject = function(includeInstance, msg) {
  var f, obj = {
    unit: jspb.Message.getFieldWithDefault(msg, 1, ""),
    timestamp: jspb.Message.getFieldWithDefault(msg, 2, ""),
    coordinate: (f = msg.getCoordinate()) && proto.proto.LatLng.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.GetBusesLocationResponse.BusLocation}
 */
proto.proto.GetBusesLocationResponse.BusLocation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.GetBusesLocationResponse.BusLocation;
  return proto.proto.GetBusesLocationResponse.BusLocation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.GetBusesLocationResponse.BusLocation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.GetBusesLocationResponse.BusLocation}
 */
proto.proto.GetBusesLocationResponse.BusLocation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUnit(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimestamp(value);
      break;
    case 3:
      var value = new proto.proto.LatLng;
      reader.readMessage(value,proto.proto.LatLng.deserializeBinaryFromReader);
      msg.setCoordinate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.GetBusesLocationResponse.BusLocation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.GetBusesLocationResponse.BusLocation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.GetBusesLocationResponse.BusLocation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.GetBusesLocationResponse.BusLocation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUnit();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTimestamp();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCoordinate();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.proto.LatLng.serializeBinaryToWriter
    );
  }
};


/**
 * optional string unit = 1;
 * @return {string}
 */
proto.proto.GetBusesLocationResponse.BusLocation.prototype.getUnit = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.proto.GetBusesLocationResponse.BusLocation.prototype.setUnit = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string timestamp = 2;
 * @return {string}
 */
proto.proto.GetBusesLocationResponse.BusLocation.prototype.getTimestamp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.proto.GetBusesLocationResponse.BusLocation.prototype.setTimestamp = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional LatLng coordinate = 3;
 * @return {?proto.proto.LatLng}
 */
proto.proto.GetBusesLocationResponse.BusLocation.prototype.getCoordinate = function() {
  return /** @type{?proto.proto.LatLng} */ (
    jspb.Message.getWrapperField(this, proto.proto.LatLng, 3));
};


/** @param {?proto.proto.LatLng|undefined} value */
proto.proto.GetBusesLocationResponse.BusLocation.prototype.setCoordinate = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.proto.GetBusesLocationResponse.BusLocation.prototype.clearCoordinate = function() {
  this.setCoordinate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.GetBusesLocationResponse.BusLocation.prototype.hasCoordinate = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated BusLocation buses_location = 1;
 * @return {!Array<!proto.proto.GetBusesLocationResponse.BusLocation>}
 */
proto.proto.GetBusesLocationResponse.prototype.getBusesLocationList = function() {
  return /** @type{!Array<!proto.proto.GetBusesLocationResponse.BusLocation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.GetBusesLocationResponse.BusLocation, 1));
};


/** @param {!Array<!proto.proto.GetBusesLocationResponse.BusLocation>} value */
proto.proto.GetBusesLocationResponse.prototype.setBusesLocationList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.proto.GetBusesLocationResponse.BusLocation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.GetBusesLocationResponse.BusLocation}
 */
proto.proto.GetBusesLocationResponse.prototype.addBusesLocation = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.proto.GetBusesLocationResponse.BusLocation, opt_index);
};


proto.proto.GetBusesLocationResponse.prototype.clearBusesLocationList = function() {
  this.setBusesLocationList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.LatLng = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.LatLng, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.proto.LatLng.displayName = 'proto.proto.LatLng';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.LatLng.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.LatLng.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.LatLng} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.LatLng.toObject = function(includeInstance, msg) {
  var f, obj = {
    latitude: +jspb.Message.getFieldWithDefault(msg, 1, 0.0),
    longitude: +jspb.Message.getFieldWithDefault(msg, 2, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.LatLng}
 */
proto.proto.LatLng.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.LatLng;
  return proto.proto.LatLng.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.LatLng} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.LatLng}
 */
proto.proto.LatLng.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLatitude(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLongitude(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.LatLng.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.LatLng.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.LatLng} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.LatLng.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLatitude();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getLongitude();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
};


/**
 * optional double latitude = 1;
 * @return {number}
 */
proto.proto.LatLng.prototype.getLatitude = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 1, 0.0));
};


/** @param {number} value */
proto.proto.LatLng.prototype.setLatitude = function(value) {
  jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double longitude = 2;
 * @return {number}
 */
proto.proto.LatLng.prototype.getLongitude = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.proto.LatLng.prototype.setLongitude = function(value) {
  jspb.Message.setProto3FloatField(this, 2, value);
};


goog.object.extend(exports, proto.proto);
